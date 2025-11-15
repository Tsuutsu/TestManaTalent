import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('front-app');
  private readonly apiUrl = 'http://localhost:3000';

  users: any[] = [];
  newUser: any = {};
  selectedUser: any = null;
  showUsersList: boolean = false;

  entities: any[] = [];
  newEntity: any = {};
  selectedEntity: any = null;
  showEntitiesList: boolean = false;

  userEntities: any[] = [];
  newUserEntity: any = {};
  selectedUserEntity: any = null;
  showUserEntitiesList: boolean = false;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    this.refreshAllLists();
  }

  refreshAllLists() {
    this.getUsers();
    this.getEntities();
    this.getUserEntities();
  }

  toggleUsersList() {
    this.showUsersList = !this.showUsersList;
  }

  toggleEntitiesList() {
    this.showEntitiesList = !this.showEntitiesList;
  }

  toggleUserEntitiesList() {
    this.showUserEntitiesList = !this.showUserEntitiesList;
  }

  getUsers() {
    this.http.get<any[]>(`${this.apiUrl}/users`).subscribe(data => {
      this.users = data;
    });
  }

  createUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.post(`${this.apiUrl}/users`, this.newUser, httpOptions).subscribe(() => {
      this.refreshAllLists();
      this.newUser = {};
      this.toastr.success('User created successfully!', 'Success');
    });
  }

  updateUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.put(`${this.apiUrl}/users/${this.selectedUser._id}`, this.selectedUser, httpOptions).subscribe(() => {
      this.refreshAllLists();
      this.selectedUser = null;
      this.toastr.success('User updated successfully!', 'Success');
    });
  }

  deleteUser(userId: string) {
    this.http.delete(`${this.apiUrl}/users/${userId}`).subscribe(() => {
      this.refreshAllLists();
      this.toastr.success('User deleted successfully!', 'Success');
    });
  }

  selectUser(user: any) {
    this.selectedUser = { ...user };
  }

  getEntities() {
    this.http.get<any[]>(`${this.apiUrl}/entities`).subscribe(data => {
      this.entities = data;
    });
  }

  createEntity() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.post(`${this.apiUrl}/entities`, this.newEntity, httpOptions).subscribe(() => {
      this.refreshAllLists();
      this.newEntity = {};
      this.toastr.success('Entity created successfully!', 'Success');
    });
  }

  updateEntity() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.put(`${this.apiUrl}/entities/${this.selectedEntity._id}`, this.selectedEntity, httpOptions).subscribe(() => {
      this.refreshAllLists();
      this.selectedEntity = null;
      this.toastr.success('Entity updated successfully!', 'Success');
    });
  }

  deleteEntity(entityId: string) {
    this.http.delete(`${this.apiUrl}/entities/${entityId}`).subscribe(() => {
      this.refreshAllLists();
      this.toastr.success('Entity deleted successfully!', 'Success');
    });
  }

  selectEntity(entity: any) {
    this.selectedEntity = { ...entity };
  }

  getUserEntities() {
    this.http.get<any[]>(`${this.apiUrl}/user-entities`).subscribe(data => {
      this.userEntities = data;
    });
  }

  createUserEntity() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.post(`${this.apiUrl}/user-entities`, this.newUserEntity, httpOptions).subscribe(() => {
      this.refreshAllLists();
      this.newUserEntity = {};
      this.toastr.success('User-Entity created successfully!', 'Success');
    });
  }

  updateUserEntity() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.put(`${this.apiUrl}/user-entities/${this.selectedUserEntity._id}`, this.selectedUserEntity, httpOptions).subscribe(() => {
      this.refreshAllLists();
      this.selectedUserEntity = null;
      this.toastr.success('User-Entity updated successfully!', 'Success');
    });
  }

  deleteUserEntity(userEntityId: string) {
    this.http.delete(`${this.apiUrl}/user-entities/${userEntityId}`).subscribe(() => {
      this.refreshAllLists();
      this.toastr.success('User-Entity deleted successfully!', 'Success');
    });
  }

  selectUserEntity(userEntity: any) {
    this.selectedUserEntity = { ...userEntity };
  }

  cancelUserEntitySelection() {
    this.selectedUserEntity = null;
  }
}
