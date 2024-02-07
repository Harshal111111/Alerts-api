import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="notification"
export default class extends Controller {
  connect() {
  }

  requestPermission() {
    console.log("requesting the prermission")
    Notification.requestPermission().then(function (prermission) {
      if (prermission === "granted") {
        new Notification("Hi There!!");
      }
    });

  }
}
