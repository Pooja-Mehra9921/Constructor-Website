import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Checkbox, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', photo: '' });
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [error, setError] = useState({ name: '', photo: '' });

  const validateInputs = () => {
    let isValid = true;
    let errorObj = { name: '', photo: '' };

    if (!newUser.name.trim()) {
      errorObj.name = 'Name is required';
      isValid = false;
    }
    if (!newUser.photo.trim()) {
      errorObj.photo = 'Photo URL is required';
      isValid = false;
    } else if (!/^https?:\/\/.+$/.test(newUser.photo.trim())) {
      errorObj.photo = 'Photo URL must be valid';
      isValid = false;
    }

    setError(errorObj);
    return isValid;
  };

  const handleAddUser = () => {
    if (!validateInputs()) return;

    const newUserWithId = { ...newUser, id: Date.now() };
    setUsers([...users, newUserWithId]);
    setNewUser({ name: '', photo: '' });
    setError({ name: '', photo: '' });
  };

  const handleUpdateUser = (id) => {
    const user = users.find(user => user.id === id);
    setUserToUpdate(user);
    setNewUser({ name: user.name, photo: user.photo });
  };

  const handleConfirmUpdate = () => {
    if (!validateInputs()) return;

    const updatedUsers = users.map(user => user.id === userToUpdate.id ? { ...user, ...newUser } : user);
    setUsers(updatedUsers);
    setUserToUpdate(null);
    setNewUser({ name: '', photo: '' });
    setError({ name: '', photo: '' });
  };

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
    setSelectedUsers(selectedUsers.filter(userId => userId !== id));
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelectedUsers = () => {
    setOpenDeleteDialog(true);
  };

  const handleConfirmDeleteSelectedUsers = () => {
    const filteredUsers = users.filter(user => !selectedUsers.includes(user.id));
    setUsers(filteredUsers);
    setSelectedUsers([]);
    setSelectAll(false);
    setOpenDeleteDialog(false);
  };

  const handleSelectUser = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card style={{ marginBottom: '20px', padding: '20px' }}>
        <CardContent>
          <TextField
            label="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            error={!!error.name}
            helperText={error.name}
            style={{ marginRight: '10px' }}
          />
          <TextField
            label="Photo URL"
            value={newUser.photo}
            onChange={(e) => setNewUser({ ...newUser, photo: e.target.value })}
            error={!!error.photo}
            helperText={error.photo}
            style={{ marginRight: '10px' }}
          />
          <Button variant="contained" color="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </CardContent>
      </Card>
      <Button variant="contained" color="secondary" onClick={handleSelectAll} style={{ marginBottom: '10px' }}>
        {selectAll ? 'Deselect All' : 'Select All'}
      </Button>
      {selectedUsers.length > 0 && (
        <Button variant="contained" color="error" onClick={handleDeleteSelectedUsers} style={{ marginBottom: '10px', marginLeft: '10px' }}>
          Delete Selected Users
        </Button>
      )}
      {users.map(user => (
        <Card key={user.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', padding: '10px' }}>
          <Checkbox
            checked={selectedUsers.includes(user.id)}
            onChange={() => handleSelectUser(user.id)}
            style={{ marginRight: '10px' }}
          />
          <Avatar src={user.photo} alt={user.name} style={{ marginRight: '10px' }} />
          <div style={{ flex: 1 }}>
            <p>{user.name}</p>
          </div>
          <Button variant="contained" color="secondary" onClick={() => handleUpdateUser(user.id)} style={{ marginRight: '10px' }}>
            Update
          </Button>
          <Button variant="contained" color="error" onClick={() => handleDeleteUser(user.id)}>
            Delete
          </Button>
        </Card>
      ))}

      {userToUpdate && (
        <Dialog open={Boolean(userToUpdate)} onClose={() => setUserToUpdate(null)}>
          <DialogTitle>Update User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update the user's details below:
            </DialogContentText>
            <TextField
              label="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              error={!!error.name}
              helperText={error.name}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Photo URL"
              value={newUser.photo}
              onChange={(e) => setNewUser({ ...newUser, photo: e.target.value })}
              error={!!error.photo}
              helperText={error.photo}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setUserToUpdate(null)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmUpdate} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the selected users?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDeleteSelectedUsers} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserManagement;
