import { Component, OnInit } from '@angular/core';
import { AnyDataSource } from 'src/app/data/data-source';
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
    this.userService.getUserList().subscribe(data => this.dataSource = new AnyDataSource([ ...data ]));
  }

}
