import { Component, OnInit } from '@angular/core';
import { UsersDataSource } from 'src/app/data/user-data-source';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'username', 'email', 'role', 'address', 'phone', 'onCreate' ];
  dataSource: any;

  constructor(private userService: UserService) {  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.userService.getUserList().subscribe(data => this.dataSource = new UsersDataSource([ ...data ]));
  }

}
