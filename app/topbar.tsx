'use client';
import { Code2, Cpu, Info, Layers3, Search } from 'lucide-react';
import { GUIDE, REPOSITORY } from './links';

type Props = {
  layers: boolean;
  onReset: () => void;
  onToggleLayers: () => void;
  onSearch: () => void;
  onAbout: () => void;
};

export default function Topbar({
  layers,
  onReset,
  onToggleLayers,
  onSearch,
  onAbout,
}: Props) {
  return (
    <header className="topbar">
      <button className="brand" onClick={onReset} aria-label="Επαναφορά PC LAB 3D">
        <span className="brand-icon">
          <Cpu size={21} />
        </span>
        <span>PC LAB 3D <small style={{ opacity: 0.65, fontWeight: 500 }}>ΓΙΑ ΜΑΘΗΤΕΣ ΔΗΜΟΤΙΚΟΥ</small></span>
      </button>
      <a
        className="byline"
        href={REPOSITORY}
        target="_blank"
        rel="noreferrer"
        title="Αρχικό PC Anatomy στο GitHub"
      >
        <Code2 size={13} />
        <span>
          Βασισμένο στο <strong>PC Anatomy</strong>
        </span>
      </a>
      <div className="header-actions">
        <a
          className="guide-link"
          href={GUIDE}
          title="Μάθε για τα εξαρτήματα του υπολογιστή"
        >
          Μαθαίνω
        </a>
        <button
          className="mobile-layers"
          onClick={onToggleLayers}
          aria-label="Εμφάνιση συστημάτων"
          aria-expanded={layers}
        >
          <Layers3 size={19} />
        </button>
        <button
          className="search-button"
          aria-label="Βρες εξάρτημα"
          onClick={onSearch}
        >
          <Search size={16} />
          <span>Βρες ένα εξάρτημα</span>
          <kbd>/</kbd>
        </button>
        <button
          className="info-button"
          aria-label="Σχετικά και πηγές"
          onClick={onAbout}
        >
          <Info size={19} />
        </button>
      </div>
    </header>
  );
}
