import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import type { TaskItemProps } from '../types';
import { colors, spacing, typography, borderRadius } from '../styles/theme';




// Estilos do componente
const styles = StyleSheet.create({
  // Card da tarefa com borda colorida à esquerda
  container: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  // Estilo quando tarefa está concluída
  completed: {
    borderLeftColor: colors.success,
    opacity: 0.7,
  },
  // Container do conteúdo textual
  content: {
    marginBottom: spacing.md,
  },
  // Título da tarefa
  title: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    color: colors.text,
  },
  // Título riscado quando completado
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  // Descrição opcional
  description: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  descriptionCompleted: {
    textDecorationLine: 'line-through',
  },
  // Container dos botões de ação
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  // Estilo base dos botões
  button: {
    flex: 1,
    padding: spacing.sm + spacing.xs / 2,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  // Botão azul para editar
  editButton: {
    backgroundColor: colors.primary,
  },
  // Botão verde para concluir
  completeButton: {
    backgroundColor: colors.success,
  },
  // Botão laranja para desfazer
  undoButton: {
    backgroundColor: colors.warning,
  },
  // Botão vermelho para remover
  deleteButton: {
    backgroundColor: colors.danger,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
  },
});

export default TaskItem;