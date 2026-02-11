
export type FormData = {
    income: number;
    expenses: number;
    desired: number;
};

export type ModalProps = {
  title: string;
  subtitle: string;
  onClose: () => void
  color: string;
};