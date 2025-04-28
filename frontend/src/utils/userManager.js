const USER_STORAGE_KEY = 'popx_users';
export const getUsers = () => {
  try {
    const usersData = localStorage.getItem(USER_STORAGE_KEY);
    return Promise.resolve(usersData ? JSON.parse(usersData) : []);
  } catch (error) {
    console.error('Error reading users data:', error);
    return Promise.resolve([]);
  }
};
export const saveUser = async (userData) => {
  try {
    const users = await getUsers();
    const userExists = users.some(user => user.email === userData.email);
    
    if (userExists) {
      throw new Error('User with this email already exists');
    }
    users.push(userData);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
    
    return users;
  } catch (error) {
    console.error('Error saving user:', error);
    throw error;
  }
};

export const verifyCredentials = async (email, password) => {
  try {
    const users = await getUsers();
    return users.find(user => user.email === email && user.password === password);
  } catch (error) {
    console.error('Error verifying credentials:', error);
    return null;
  }
};