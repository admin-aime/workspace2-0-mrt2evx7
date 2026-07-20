import { useState, useCallback } from 'react';

export interface CrudItem {
  id: string;
}

export function useCrudState<T extends CrudItem>(initial: T[]) {
  const [items, setItems] = useState<T[]>(initial);
  const [editingItem, setEditingItem] = useState<T | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<T | null>(null);

  const addItem = useCallback((item: T) => {
    setItems(prev => [...prev, item]);
  }, []);

  const updateItem = useCallback((updated: T) => {
    setItems(prev => prev.map(i => i.id === updated.id ? updated : i));
  }, []);

  const deleteItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
    setDeleteTarget(null);
  }, []);

  const openCreate = useCallback(() => {
    setEditingItem(null);
    setIsFormOpen(true);
  }, []);

  const openEdit = useCallback((item: T) => {
    setEditingItem(item);
    setIsFormOpen(true);
  }, []);

  const openDelete = useCallback((item: T) => {
    setDeleteTarget(item);
  }, []);

  const closeForm = useCallback(() => {
    setIsFormOpen(false);
    setEditingItem(null);
  }, []);

  const closeDelete = useCallback(() => {
    setDeleteTarget(null);
  }, []);

  return {
    items,
    editingItem,
    isFormOpen,
    deleteTarget,
    addItem,
    updateItem,
    deleteItem,
    openCreate,
    openEdit,
    openDelete,
    closeForm,
    closeDelete,
  };
}
