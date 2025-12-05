/**
 * Supprime un utilisateur par son ID
 * @param {string|number} userId
 * @param {string} token (JWT ou Bearer token pour l'authentification)
 * @returns {Promise<Object>} Résultat de la suppression
 */
export async function deleteUser(userId, token) {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erreur lors de la suppression de l\'utilisateur');
  }
  return response.json();
}
// Service pour la gestion des utilisateurs (Appel API REST)

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Récupère les informations d'un utilisateur par son ID
 * @param {string|number} userId
 * @param {string} token (JWT ou Bearer token pour l'authentification)
 * @returns {Promise<Object>} user
 */
export async function getUserInfo(userId, token) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erreur lors de la récupération de l\'utilisateur');
    }
    const data = await response.json();
    return data; // ou data.user selon la réponse backend
  } catch (error) {
    throw error;
  }
}
export async function getUsersList(token, page = 1, pageSize = 10) {
  const response = await fetch(
    `${API_BASE_URL}/users?page=${page}&pageSize=${pageSize}`,
    {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des utilisateurs');
  }
  return response.json();
}

