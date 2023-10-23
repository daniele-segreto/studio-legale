import { Component, OnInit } from '@angular/core';
// import QRCode from 'qrcode';
import * as qrcode from 'qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  ngOnInit() {
    // Testo o URL che desideri convertire in codice QR
    // let testoCodiceQR: string = "https://www.example.com";

    // Crea un nuovo oggetto QRCode
    // let qrcode = new QRCode(document.getElementById("qrcode"), {
    //   text: testoCodiceQR,
    //   width: 128,
    //   height: 128
    // });
  }

}
