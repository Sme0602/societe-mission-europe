"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Map, {
  Layer,
  type MapRef,
  NavigationControl,
  Popup,
  Source,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { FeatureCollection, Point } from "geojson";
import CompanyPanel from "./CompanyPanel";
import MapFilters from "./MapFilters";

interface Company {
  id: string;
  nom: string;
  nom_raison_sociale?: string;
  siren?: string;
  adresse?: string;
  code_postal?: string;
  commune?: string;
  departement?: string;
  region?: string;
  latitude: number;
  longitude: number;
  raison_etre?: string;
  date_qualification_mission?: string;
  categorie_entreprise?: string;
  tranche_effectif_salarie?: string;
  activite_principale?: string;
  section_activite_principale?: string;
  secteur_scrape?: string;
  nature_juridique?: string;
  url_fiche_observatoire?: string;
  slug_observatoire?: string;
}

interface Props {
  companies: Company[];
}

const TRANCHE_LABELS: Record<string, string> = {
  "00": "0 salarié",
  "01": "1-2",
  "02": "3-5",
  "03": "6-9",
  "11": "10-19",
  "12": "20-49",
  "21": "50-99",
  "22": "100-199",
  "31": "200-249",
  "32": "250-499",
  "41": "500-999",
  "42": "1000-1999",
  "51": "2000-4999",
  "52": "5000-9999",
  "53": "10000+",
  NN: "",
};

const REGION_LABELS: Record<string, string> = {
  "01": "Guadeloupe",
  "02": "Martinique",
  "03": "Guyane",
  "04": "La Réunion",
  "06": "Mayotte",
  "11": "Île-de-France",
  "24": "Centre-Val de Loire",
  "27": "Bourgogne-Franche-Comté",
  "28": "Normandie",
  "32": "Hauts-de-France",
  "44": "Grand Est",
  "52": "Pays de la Loire",
  "53": "Bretagne",
  "75": "Nouvelle-Aquitaine",
  "76": "Occitanie",
  "84": "Auvergne-Rhône-Alpes",
  "93": "Provence-Alpes-Côte d'Azur",
  "94": "Corse",
};

const SECTION_LABELS: Record<string, string> = {
  A: "Agriculture",
  B: "Industries extractives",
  C: "Industrie manufacturière",
  D: "Énergie",
  E: "Eau & déchets",
  F: "Construction",
  G: "Commerce",
  H: "Transport",
  I: "Hébergement & restauration",
  J: "Information & communication",
  K: "Finance & assurance",
  L: "Immobilier",
  M: "Activités spécialisées",
  N: "Services administratifs",
  O: "Administration publique",
  P: "Enseignement",
  Q: "Santé",
  R: "Arts & spectacles",
  S: "Autres services",
};

export default function CarteInteractive({ companies }: Props) {
  const mapRef = useRef<MapRef>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    region: "",
    section: "",
    categorie: "",
    search: "",
  });

  // Get unique filter values
  const regions = useMemo(() => {
    const set = new Set(
      companies.map((c) => c.region).filter((r): r is string => !!r)
    );
    return Array.from(set).sort((a, b) =>
      (REGION_LABELS[a] || a).localeCompare(REGION_LABELS[b] || b, "fr")
    );
  }, [companies]);

  const sections = useMemo(() => {
    const set = new Set(
      companies.map((c) => c.section_activite_principale).filter(Boolean)
    );
    return Array.from(set).sort() as string[];
  }, [companies]);

  // Filter companies
  const filteredCompanies = useMemo(() => {
    return companies.filter((c) => {
      if (filters.region && c.region !== filters.region) return false;
      if (
        filters.section &&
        c.section_activite_principale !== filters.section
      )
        return false;
      if (filters.categorie && c.categorie_entreprise !== filters.categorie)
        return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const searchable = [c.nom, c.commune, c.departement, c.raison_etre]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }, [companies, filters]);

  // Build GeoJSON
  const geojson = useMemo<FeatureCollection<Point>>(() => {
    return {
      type: "FeatureCollection",
      features: filteredCompanies.map((c) => ({
        type: "Feature",
        properties: {
          id: c.id,
          nom: c.nom,
          commune: c.commune || "",
          region: c.region || "",
          section: c.section_activite_principale || "",
          categorie: c.categorie_entreprise || "",
        },
        geometry: {
          type: "Point",
          coordinates: [c.longitude, c.latitude],
        },
      })),
    };
  }, [filteredCompanies]);

  const handleClick = useCallback(
    (event: maplibregl.MapLayerMouseEvent) => {
      const map = mapRef.current;
      if (!map) return;

      // Query features directly at click point
      const point: [number, number] = [event.point.x, event.point.y];
      const clusterFeatures = map.queryRenderedFeatures(point, { layers: ["clusters"] });
      const pinFeatures = map.queryRenderedFeatures(point, { layers: ["unclustered-point"] });

      // Click on cluster → zoom in
      if (clusterFeatures.length > 0) {
        const feature = clusterFeatures[0];
        const clusterId = feature.properties?.cluster_id;
        const source = map.getSource("companies") as any;
        if (source?.getClusterExpansionZoom) {
          const result = source.getClusterExpansionZoom(clusterId);
          if (result && typeof result.then === "function") {
            result.then((zoom: number) => {
              map.easeTo({
                center: (feature.geometry as any).coordinates,
                zoom,
                duration: 500,
              });
            });
          }
        }
        return;
      }

      // Click on individual pin
      if (pinFeatures.length > 0) {
        const props = pinFeatures[0].properties;
        const company = filteredCompanies.find((c) => c.id === props?.id);
        if (company) {
          setSelectedCompany(company);
          map.easeTo({
            center: [company.longitude, company.latitude],
            zoom: Math.max(map.getZoom(), 10),
            duration: 500,
          });
        }
        return;
      }

      // Click on empty area
      setSelectedCompany(null);
    },
    [filteredCompanies]
  );

  const handleMouseMove = useCallback(
    (event: maplibregl.MapLayerMouseEvent) => {
      const map = mapRef.current;
      if (!map) return;
      const point: [number, number] = [event.point.x, event.point.y];
      const features = map.queryRenderedFeatures(point, {
        layers: ["clusters", "unclustered-point"],
      });
      const canvas = map.getCanvas();
      if (canvas) canvas.style.cursor = features.length > 0 ? "pointer" : "";
    },
    []
  );

  return (
    <div className="relative w-full h-full bg-white">
      {/* Filters bar */}
      <MapFilters
        filters={filters}
        onFiltersChange={setFilters}
        regions={regions}
        sections={sections}
        sectionLabels={SECTION_LABELS}
        regionLabels={REGION_LABELS}
        totalCount={companies.length}
        filteredCount={filteredCompanies.length}
      />

      {/* Map */}
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 2.5,
          latitude: 46.6,
          zoom: 5.8,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
      >
        <NavigationControl position="bottom-right" />

        <Source
          id="companies"
          type="geojson"
          data={geojson}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={60}
        >
          {/* Cluster circles */}
          <Layer
            id="clusters"
            type="circle"
            filter={["has", "point_count"]}
            paint={{
              "circle-color": [
                "step",
                ["get", "point_count"],
                "#F57028", // orange-500 < 20
                20,
                "#E33766", // rose-600 20-100
                100,
                "#243267", // navy-700 100+
              ],
              "circle-radius": [
                "step",
                ["get", "point_count"],
                18,
                20,
                24,
                100,
                32,
              ],
              "circle-stroke-width": 3,
              "circle-stroke-color": "#ffffff",
              "circle-opacity": 0.9,
            }}
          />

          {/* Cluster count labels */}
          <Layer
            id="cluster-count"
            type="symbol"
            filter={["has", "point_count"]}
            layout={{
              "text-field": "{point_count_abbreviated}",
              "text-font": ["Open Sans Bold"],
              "text-size": 13,
            }}
            paint={{
              "text-color": "#ffffff",
            }}
          />

          {/* Individual pins */}
          <Layer
            id="unclustered-point"
            type="circle"
            filter={["!", ["has", "point_count"]]}
            paint={{
              "circle-color": "#F57028",
              "circle-radius": 7,
              "circle-stroke-width": 2.5,
              "circle-stroke-color": "#ffffff",
              "circle-opacity": 0.95,
            }}
          />
        </Source>
      </Map>

      {/* Detail panel */}
      <CompanyPanel
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
        trancheLabels={TRANCHE_LABELS}
        sectionLabels={SECTION_LABELS}
        regionLabels={REGION_LABELS}
      />

      {/* Stats badge */}
      <div className="absolute bottom-6 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-beige-200">
        <span className="text-sm font-semibold text-navy-800">
          {filteredCompanies.length.toLocaleString("fr-FR")} sociétés à mission
        </span>
      </div>
    </div>
  );
}
