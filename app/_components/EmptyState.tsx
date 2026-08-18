import ContentStatus from "./ContentStatus";

type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <ContentStatus>{title}</ContentStatus>
      <p>{description}</p>
    </div>
  );
}
