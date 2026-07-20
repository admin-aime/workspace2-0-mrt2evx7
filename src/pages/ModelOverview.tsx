export default function ModelOverview() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">Model Overview</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-white mb-2">What This App Does</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Name Display is a simple application for collecting and displaying names. It lets you
            type a name into a text field, submit it, and see it appear in a growing list. You can
            also remove names from the list when they are no longer needed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">Main Features</h2>
          <ul className="space-y-2 text-white/60 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">+</span>
              <span><strong className="text-white/80">Add a name</strong> — Type any name into the input field and click Add to append it to the list.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">+</span>
              <span><strong className="text-white/80">View all names</strong> — The list shows every name that has been added, with a running count.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">+</span>
              <span><strong className="text-white/80">Remove a name</strong> — Hover over any name and click the trash icon to delete it after confirming.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">How to Use</h2>
          <ol className="list-decimal list-inside space-y-1 text-white/60 text-sm leading-relaxed">
            <li>Navigate to the <strong className="text-white/80">Names</strong> page.</li>
            <li>Type a name into the input field at the top.</li>
            <li>Click the <strong className="text-white/80">Add</strong> button (or press Enter).</li>
            <li>The name appears in the list below immediately.</li>
            <li>To remove a name, hover over it and click the trash icon, then confirm.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
