export default function SectionContainer({
  children,
  className = "",
  id,
  as: Tag = "section",
}) {
  return (
    <Tag
      id={id}
      className={`px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </Tag>
  );
}
