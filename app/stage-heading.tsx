'use client';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import type { Concept } from '@/lib/manifest';
import { levelPath, levels, type LevelId } from '@/lib/levels';
import { hardwareNameEl, levelNameEl, levelTitleEl } from '@/lib/greek-display';

type Props = {
  level: LevelId;
  explode: number;
  logical: boolean;
  selected: Concept | null;
  /** `null` until the viewer has reported for the first time. */
  count: number | null;
  onNavigate: (level: LevelId) => void;
};

export default function StageHeading({
  level,
  explode,
  logical,
  selected,
  count,
  onNavigate,
}: Props) {
  const scale = levels[level],
    path = levelPath(level);
  return (
    <section className="stage-heading">
      <div>
        <h1>
          {explode === 100
            ? 'Κατάλογος εξαρτημάτων'
            : explode > 0
              ? logical
                ? 'Τα μέρη του εξαρτήματος'
                : 'Αποσυναρμολόγηση'
              : levelTitleEl(level)}
        </h1>
        <div className="stage-meta">
          <p className="eyebrow">{scale.caption}</p>
          <nav className="breadcrumbs" aria-label="Ιεραρχία εξαρτημάτων">
            {path.length > 1 && (
              <button
                aria-label="Πίσω ένα επίπεδο"
                onClick={() => onNavigate(path[path.length - 2])}
              >
                <ArrowLeft size={14} />
              </button>
            )}
            {path.map((id, i) => (
              <span key={id}>
                {i > 0 && <ChevronRight size={12} />}
                <button
                  aria-current={id === level ? 'page' : undefined}
                  onClick={() => onNavigate(id)}
                >
                  {levelNameEl(id)}
                </button>
              </span>
            ))}
            {selected && selected.shortName !== scale.name && (
              <span>
                <ChevronRight size={12} />
                <span className="crumb-selected">{hardwareNameEl(selected.shortName)}</span>
              </span>
            )}
          </nav>
        </div>
      </div>
      {count !== null && (
        <output
          className="stage-counter"
          aria-live="polite"
          aria-label={`${count} ορατά εξαρτήματα`}
        >
          <strong>{count}</strong>
          <span>ορατά εξαρτήματα</span>
        </output>
      )}
    </section>
  );
}
