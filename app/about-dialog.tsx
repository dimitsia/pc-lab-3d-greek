'use client';
import { ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { REPOSITORY } from './links';

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

export default function AboutDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogContent className="about-dialog">
        <DialogTitle>PC LAB 3D — Το Εργαστήριο του Υπολογιστή</DialogTitle>
        <DialogDescription>
          Διαδραστική τρισδιάστατη εξερεύνηση του εσωτερικού ενός υπολογιστή για εκπαιδευτική χρήση.
        </DialogDescription>
        <p>
          Περιστρέψτε τον υπολογιστή, επιλέξτε εξαρτήματα και χρησιμοποιήστε την αποσυναρμολόγηση για να δείτε πώς συνδέονται μητρική, επεξεργαστής, μνήμη, κάρτα γραφικών, τροφοδοσία, αποθήκευση και ψύξη.
        </p>
        <h3>Εκπαιδευτικό 3D μοντέλο</h3>
        <p>
          Οι γεωμετρίες είναι εκπαιδευτικές απεικονίσεις. Οι πραγματικές διαστάσεις και τα πρότυπα χρησιμοποιούνται όπου τεκμηριώνονται, αλλά το μοντέλο δεν αποτελεί τεχνικό σχέδιο επισκευής συγκεκριμένου υπολογιστή.
        </p>
        <h3>Πηγές & άδεια</h3>
        <p>
          Το PC LAB 3D βασίζεται στο ανοικτού κώδικα PC Anatomy του Yoseph και διατηρεί την άδεια MIT και τις αρχικές πηγές του έργου.
        </p>
        <a className="about-source" href={REPOSITORY} target="_blank" rel="noreferrer">
          Αρχικός κώδικας PC Anatomy <ArrowUpRight size={15} />
        </a>
        <p className="about-foot">
          Δεν υπάρχει σύνδεση ή επίσημη συνεργασία με NVIDIA, AMD ή Intel. Εκπαιδευτική προσαρμογή του ανοικτού έργου PC Anatomy.
        </p>
      </DialogContent>
    </Dialog>
  );
}
