type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: Props) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}