import { useState, FormEvent } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useCrudState, CrudItem } from '../hooks/useCrudState';
import ConfirmDialog from '../components/ConfirmDialog';
import EmptyState from '../components/EmptyState';

interface NameEntry extends CrudItem {
  name: string;
}

const initialNames: NameEntry[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
  { id: '4', name: 'Diana' },
  { id: '5', name: 'Eve' },
];

export default function Home() {
  const {
    items: names,
    deleteTarget,
    addItem,
    deleteItem,
    openDelete,
    closeDelete,
  } = useCrudState<NameEntry>(initialNames);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    addItem({ id: crypto.randomUUID(), name: trimmed });
    setInputValue('');
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Name Display</h1>
        <p className="text-white/50 text-sm">Add names to the list and see them displayed below.</p>
      </div>

      {/* Add form */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Type a name..."
          className="flex-1 px-4 py-3 rounded-xl bg-[#1a1f36] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors text-sm"
          autoFocus
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 disabled:text-white/30 text-white text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </form>

      {/* Names list */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
            Names ({names.length})
          </h2>
        </div>

        {names.length === 0 ? (
          <EmptyState message="No names yet. Type a name above and click Add." />
        ) : (
          <ul className="space-y-1">
            {names.map(entry => (
              <li
                key={entry.id}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#111633] border border-white/5 hover:border-white/10 transition-colors group"
              >
                <span className="text-white text-sm font-medium">{entry.name}</span>
                <button
                  onClick={() => openDelete(entry)}
                  className="text-white/20 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                  title={`Delete ${entry.name}`}
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ConfirmDialog
        isOpen={deleteTarget !== null}
        onClose={closeDelete}
        onConfirm={() => deleteTarget && deleteItem(deleteTarget.id)}
        title="Delete Name"
        message={`Are you sure you want to remove "${deleteTarget?.name}" from the list?`}
      />
    </div>
  );
}
