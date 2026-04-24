/**
 * Hook customizado para gerenciamento de tarefas
 * Gerencia estado, requisições à API e operações CRUD
 */

import { useState, useEffect } from 'react';
import { API_URL, MESSAGES } from '../utils/constants';
import type { Task, TaskFormData, UseTasksReturn } from '../types';

export function useTasks(): UseTasksReturn {
  // Estados do hook
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Busca todas as tarefas da API
  async function fetchTasks(): Promise<void> { 
    setLoading(true); // Inicia loading
    setError(null); // Limpa erros anteriores
    try {
      const response = await fetch(API_URL); // GET request
      if (!response.ok) throw new Error('Erro ao carregar tarefas');
      const data: Task[] = await response.json(); // Parse JSON
      setTasks(data); // Atualiza estado com tarefas
    } catch (err) {
      setError(MESSAGES.ERROR_LOAD); // Define mensagem de erro
      console.error('Erro:', err); // Log para debug
    } finally {
      setLoading(false); // Finaliza loading
    }
  } 
}