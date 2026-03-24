"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import todosData from "@/data/todos.json";

interface Task {
  id: string;
  text: string;
  done: boolean;
}

interface Category {
  id: string;
  name: string;
  color: string;
  tasks: Task[];
}

interface Data {
  lastUpdated: string;
  categories: Category[];
}

/* ───────── geometry helpers ───────── */
const DEG = Math.PI / 180;

function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = angleDeg * DEG;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function bezierPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const cx1 = mx;
  const cy1 = y1;
  const cx2 = mx;
  const cy2 = y2;
  return `M${x1},${y1} C${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`;
}

/* ───────── constants ───────── */
const CX = 700;
const CY = 500;
const R_CATEGORY = 230;
const R_TASK = 430;
const CATEGORY_NODE_R = 50;
const TASK_NODE_R = 8;
const CENTER_R = 70;

export default function MindMap() {
  const [data, setData] = useState<Data>(todosData as Data);
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(data.categories.map((c) => c.id))
  );
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.85);
  const dragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const totalTasks = data.categories.reduce(
    (s, c) => s + c.tasks.length,
    0
  );
  const doneTasks = data.categories.reduce(
    (s, c) => s + c.tasks.filter((t) => t.done).length,
    0
  );

  /* ── pan & zoom ── */
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.min(3, Math.max(0.3, z - e.deltaY * 0.001)));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) {
      dragging.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current) return;
    setPan((p) => ({
      x: p.x + e.clientX - lastMouse.current.x,
      y: p.y + e.clientY - lastMouse.current.y,
    }));
    lastMouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  /* ── toggle expand / toggle done ── */
  function toggleExpand(catId: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(catId) ? next.delete(catId) : next.add(catId);
      return next;
    });
  }

  function toggleDone(catId: string, taskId: string) {
    setData((prev) => ({
      ...prev,
      categories: prev.categories.map((c) =>
        c.id === catId
          ? {
              ...c,
              tasks: c.tasks.map((t) =>
                t.id === taskId ? { ...t, done: !t.done } : t
              ),
            }
          : c
      ),
    }));
  }

  /* ── layout categories around center ── */
  const nCats = data.categories.length;
  const startAngle = -60;
  const angleSpan = 360;
  const catAngleStep = angleSpan / nCats;

  const catPositions = data.categories.map((cat, i) => {
    const angle = startAngle + i * catAngleStep;
    const pos = polarToXY(CX, CY, R_CATEGORY, angle);
    return { ...cat, ...pos, angle };
  });

  return (
    <div
      className="relative w-screen h-screen overflow-hidden select-none"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}
    >
      {/* ── header ── */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-white text-xl font-bold tracking-wide">
            Mind Map To-Do
          </h1>
          <p className="text-slate-400 text-sm mt-0.5">
            Dernière mise à jour : {data.lastUpdated}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-800/80 backdrop-blur rounded-full px-4 py-2 flex items-center gap-3">
            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${totalTasks ? (doneTasks / totalTasks) * 100 : 0}%`,
                  background: "linear-gradient(90deg, #F57028, #EF3869)",
                }}
              />
            </div>
            <span className="text-slate-300 text-sm font-medium">
              {doneTasks}/{totalTasks}
            </span>
          </div>
          <button
            onClick={() =>
              setExpanded((prev) =>
                prev.size === nCats
                  ? new Set()
                  : new Set(data.categories.map((c) => c.id))
              )
            }
            className="bg-slate-800/80 backdrop-blur text-slate-300 text-sm rounded-full px-4 py-2 hover:bg-slate-700/80 transition-colors"
          >
            {expanded.size === nCats ? "Tout replier" : "Tout déplier"}
          </button>
        </div>
      </div>

      {/* ── legend ── */}
      <div className="absolute bottom-6 left-8 z-10 flex flex-wrap gap-3">
        {data.categories.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center gap-2 bg-slate-800/60 backdrop-blur rounded-full px-3 py-1.5"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: cat.color }}
            />
            <span className="text-slate-300 text-xs font-medium">
              {cat.name}
            </span>
            <span className="text-slate-500 text-xs">
              {cat.tasks.filter((t) => t.done).length}/{cat.tasks.length}
            </span>
          </div>
        ))}
      </div>

      {/* ── SVG mind map ── */}
      <svg
        ref={svgRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        viewBox="0 0 1400 1000"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <g
          transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}
          style={{ transformOrigin: "700px 500px" }}
        >
          {/* ── ambient glow ── */}
          <defs>
            {data.categories.map((cat) => (
              <radialGradient key={`glow-${cat.id}`} id={`glow-${cat.id}`}>
                <stop offset="0%" stopColor={cat.color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={cat.color} stopOpacity="0" />
              </radialGradient>
            ))}
            <radialGradient id="center-glow">
              <stop offset="0%" stopColor="#F57028" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F57028" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* center glow */}
          <circle cx={CX} cy={CY} r={140} fill="url(#center-glow)" />

          {/* ── branches: center → categories ── */}
          {catPositions.map((cat) => (
            <path
              key={`branch-${cat.id}`}
              d={bezierPath(CX, CY, cat.x, cat.y)}
              fill="none"
              stroke={cat.color}
              strokeWidth="2"
              strokeOpacity="0.4"
            />
          ))}

          {/* ── task branches + nodes ── */}
          {catPositions.map((cat) => {
            if (!expanded.has(cat.id)) return null;
            const tasks = cat.tasks;
            const nTasks = tasks.length;
            const taskAngleSpan = Math.min(catAngleStep * 0.85, nTasks * 14);
            const taskAngleStart = cat.angle - taskAngleSpan / 2;
            const taskAngleStep2 =
              nTasks > 1 ? taskAngleSpan / (nTasks - 1) : 0;

            return tasks.map((task, ti) => {
              const angle = taskAngleStart + ti * taskAngleStep2;
              const tp = polarToXY(CX, CY, R_TASK, angle);
              const isHovered = hoveredTask === task.id;

              return (
                <g key={task.id}>
                  {/* branch line */}
                  <path
                    d={bezierPath(cat.x, cat.y, tp.x, tp.y)}
                    fill="none"
                    stroke={cat.color}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeOpacity={task.done ? 0.2 : isHovered ? 0.7 : 0.3}
                    className="transition-all duration-200"
                  />
                  {/* task dot */}
                  <circle
                    cx={tp.x}
                    cy={tp.y}
                    r={isHovered ? TASK_NODE_R + 3 : TASK_NODE_R}
                    fill={task.done ? "#334155" : cat.color}
                    stroke={task.done ? "#475569" : "white"}
                    strokeWidth={task.done ? 1 : 2}
                    opacity={task.done ? 0.5 : 1}
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredTask(task.id)}
                    onMouseLeave={() => setHoveredTask(null)}
                    onClick={() => toggleDone(cat.id, task.id)}
                  />
                  {/* checkmark for done tasks */}
                  {task.done && (
                    <text
                      x={tp.x}
                      y={tp.y + 1}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#94a3b8"
                      fontSize="10"
                      className="pointer-events-none"
                    >
                      ✓
                    </text>
                  )}
                  {/* task label */}
                  <foreignObject
                    x={
                      Math.cos(angle * DEG) >= 0
                        ? tp.x + 16
                        : tp.x - 216
                    }
                    y={tp.y - 14}
                    width="200"
                    height="28"
                    className="pointer-events-none"
                  >
                    <div
                      className={`text-xs leading-tight truncate ${
                        task.done
                          ? "text-slate-600 line-through"
                          : isHovered
                          ? "text-white font-medium"
                          : "text-slate-400"
                      }`}
                      style={{
                        textAlign:
                          Math.cos(angle * DEG) >= 0 ? "left" : "right",
                      }}
                    >
                      {task.text}
                    </div>
                  </foreignObject>
                </g>
              );
            });
          })}

          {/* ── category nodes ── */}
          {catPositions.map((cat) => {
            const done = cat.tasks.filter((t) => t.done).length;
            const total = cat.tasks.length;
            const pct = total ? done / total : 0;
            const isExpanded = expanded.has(cat.id);

            return (
              <g
                key={cat.id}
                className="cursor-pointer"
                onClick={() => toggleExpand(cat.id)}
              >
                {/* glow */}
                <circle
                  cx={cat.x}
                  cy={cat.y}
                  r={CATEGORY_NODE_R + 30}
                  fill={`url(#glow-${cat.id})`}
                />
                {/* progress ring background */}
                <circle
                  cx={cat.x}
                  cy={cat.y}
                  r={CATEGORY_NODE_R}
                  fill="none"
                  stroke="#334155"
                  strokeWidth="3"
                />
                {/* progress ring */}
                {pct > 0 && (
                  <circle
                    cx={cat.x}
                    cy={cat.y}
                    r={CATEGORY_NODE_R}
                    fill="none"
                    stroke={cat.color}
                    strokeWidth="3"
                    strokeDasharray={`${
                      pct * 2 * Math.PI * CATEGORY_NODE_R
                    } ${2 * Math.PI * CATEGORY_NODE_R}`}
                    strokeDashoffset={
                      0.25 * 2 * Math.PI * CATEGORY_NODE_R
                    }
                    strokeLinecap="round"
                  />
                )}
                {/* filled bg */}
                <circle
                  cx={cat.x}
                  cy={cat.y}
                  r={CATEGORY_NODE_R - 4}
                  fill="#1e293b"
                  stroke={cat.color}
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                {/* name */}
                <text
                  x={cat.x}
                  y={cat.y - 6}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                  className="pointer-events-none"
                >
                  {cat.name}
                </text>
                {/* count */}
                <text
                  x={cat.x}
                  y={cat.y + 12}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#94a3b8"
                  fontSize="10"
                  className="pointer-events-none"
                >
                  {done}/{total}
                </text>
                {/* expand indicator */}
                <text
                  x={cat.x}
                  y={cat.y + CATEGORY_NODE_R + 16}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#64748b"
                  fontSize="10"
                  className="pointer-events-none"
                >
                  {isExpanded ? "▲" : "▼"}
                </text>
              </g>
            );
          })}

          {/* ── center node ── */}
          <circle cx={CX} cy={CY} r={CENTER_R} fill="#1e293b" />
          <circle
            cx={CX}
            cy={CY}
            r={CENTER_R}
            fill="none"
            stroke="url(#center-glow)"
            strokeWidth="2"
          />
          <circle
            cx={CX}
            cy={CY}
            r={CENTER_R - 2}
            fill="none"
            stroke="#F57028"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <text
            x={CX}
            y={CY - 12}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
            fontSize="11"
            fontWeight="700"
          >
            Société à Mission
          </text>
          <text
            x={CX}
            y={CY + 4}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
            fontSize="11"
            fontWeight="700"
          >
            Europe
          </text>
          <text
            x={CX}
            y={CY + 22}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#F57028"
            fontSize="10"
          >
            {doneTasks}/{totalTasks} tâches
          </text>
        </g>
      </svg>

      {/* ── zoom controls ── */}
      <div className="absolute bottom-6 right-8 z-10 flex flex-col gap-2">
        <button
          onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
          className="w-9 h-9 bg-slate-800/80 backdrop-blur text-white rounded-lg flex items-center justify-center hover:bg-slate-700/80 transition-colors text-lg"
        >
          +
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(0.3, z - 0.2))}
          className="w-9 h-9 bg-slate-800/80 backdrop-blur text-white rounded-lg flex items-center justify-center hover:bg-slate-700/80 transition-colors text-lg"
        >
          −
        </button>
        <button
          onClick={() => {
            setZoom(1);
            setPan({ x: 0, y: 0 });
          }}
          className="w-9 h-9 bg-slate-800/80 backdrop-blur text-white rounded-lg flex items-center justify-center hover:bg-slate-700/80 transition-colors text-xs"
        >
          ⟲
        </button>
      </div>
    </div>
  );
}
