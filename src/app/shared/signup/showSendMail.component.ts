import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: ` <head>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap"
        rel="stylesheet"
      />
    </head>
    <style>
      body {
        text-align: center;
        padding: 40px 0;
      }

      h1 {
        font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
        font-weight: 900;
        font-size: 40px;
        margin-bottom: 10px;
      }

      .succes {
        color: #88b04b;
      }

      .error {
        color: #f30808;
      }

      p {
        color: #404f5e;
        font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        margin: 0;
      }

      i {
        color: #9abc66;
        font-size: 100px;
        line-height: 200px;
        margin-left: -15px;
      }

      .card {
        background: white;
        padding: 60px;
        border-radius: 4px;
        box-shadow: 0 2px 3px #c8d0d8;
        display: inline-block;
        margin: 0 auto;
      }
    </style>
    <body>
      <div class="card">
        <div
          style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;"
        >
          <i class="checkmark">✓</i>
        </div>
        <h1 class="succes">Hesabınız Oluşturuldu</h1>
        <p>
          Hesabınızı aktif hale getirmek için <br />
          mail adresinize Mail göndererildi
        </p>
      </div>
    </body>`,
})
export class ShowSendMailComponent implements OnInit {
  ngOnInit(): void {}


}
