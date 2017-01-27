import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(memberType: string, name: string, age: number, description: string, picture: string) {
    var newMember: Member = new Member(memberType, name, age, description, picture);

    this.memberService.addMember(newMember);
    this.router.navigate(['Members']);
  }
}
