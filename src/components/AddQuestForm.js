import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { QuestType } from '../types';

const AddQuestForm = ({ visible, onClose, onAdd, defaultDate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedType, setSelectedType] = useState(QuestType.DAILY);

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title, description, selectedType, defaultDate);
      setTitle('');
      setDescription('');
      setSelectedType(QuestType.DAILY);
      onClose();
    }
  };

  const questTypes = [
    { type: QuestType.DAILY, label: 'Daily Goal', color: '#4A90E2', description: 'Regular daily task' },
    { type: QuestType.SIDE_QUEST, label: 'Side Quest', color: '#7ED321', description: 'Quick task (e.g., laundry)' },
    { type: QuestType.BOSS, label: 'Boss', color: '#F5A623', description: 'Day-long task (e.g., groceries)' },
    { type: QuestType.MEGA_BOSS, label: 'Mega Boss', color: '#D0021B', description: 'Multi-week project' },
  ];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Add New Quest</Text>

          <TextInput
            style={styles.input}
            placeholder="Quest title"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Description (optional)"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />

          <Text style={styles.label}>Quest Type:</Text>
          {questTypes.map((qt) => (
            <TouchableOpacity
              key={qt.type}
              style={[
                styles.typeOption,
                selectedType === qt.type && styles.selectedTypeOption,
                { borderColor: qt.color }
              ]}
              onPress={() => setSelectedType(qt.type)}
            >
              <View style={styles.typeHeader}>
                <Text style={[styles.typeLabel, selectedType === qt.type && styles.selectedTypeLabel]}>
                  {qt.label}
                </Text>
                {selectedType === qt.type && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.typeDescription}>{qt.description}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.addButton, !title.trim() && styles.disabledButton]} 
              onPress={handleAdd}
              disabled={!title.trim()}
            >
              <Text style={styles.addButtonText}>Add Quest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  typeOption: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  selectedTypeOption: {
    backgroundColor: '#f0f8ff',
    borderWidth: 3,
  },
  typeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  typeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  selectedTypeLabel: {
    fontWeight: 'bold',
  },
  typeDescription: {
    fontSize: 12,
    color: '#666',
  },
  checkmark: {
    fontSize: 20,
    color: '#4A90E2',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#4A90E2',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});

export default AddQuestForm;
