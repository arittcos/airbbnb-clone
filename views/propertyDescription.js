let checkinDate = document.getElementById(
  "propertyDescriptionBodyLeftColumnPriceDeciderCheckinDate"
);
let checkoutDate = document.getElementById(
  "propertyDescriptionBodyLeftColumnPriceDeciderCheckoutDate"
);
let reserveBtn = document.getElementById("reserveBtn");
let prpDespNoGuest = document.getElementById(
  "propertyDescriptionBodyLeftColumnPriceDeciderNoOfGuestInp"
);

reserveBtn.addEventListener("click", () => {
  let checkinDateNew = new Date(checkinDate.value).getDate();
  let checkoutDateNew = new Date(checkoutDate.value).getDate();
  let checkinMonth = new Date(checkinDate.value).getMonth();
  let checkoutMonth = new Date(checkoutDate.value).getMonth();
  let totalTravelDate;

  if (checkinDateNew && checkoutDateNew && prpDespNoGuest.value) {
    if (checkinDateNew == checkoutDateNew) {
      if (checkoutMonth > checkinMonth) {
        totalTravelDate = checkoutDateNew + (30 - checkinDateNew);
        window.open(
          "/billingPage/" +
            totalTravelDate +
            "/" +
            prpDespNoGuest.value +
            "/" +
            checkinDateNew +
            "/" +
            checkoutDateNew +
            "/" +
            checkinMonth +
            "/" +
            checkoutMonth
        );
      } else {
        alert("Checkin & checkout Can not be same");
      }
    } else if (checkinDateNew != checkoutDateNew) {
      if (checkinMonth == checkoutMonth) {
        totalTravelDate = checkoutDateNew - checkinDateNew;
        window.open(
          "/billingPage/" +
            totalTravelDate +
            "/" +
            prpDespNoGuest.value +
            "/" +
            checkinDateNew +
            "/" +
            checkoutDateNew +
            "/" +
            (checkinMonth + 1) +
            "/" +
            (checkoutMonth + 1)
        );
      } else {
        totalTravelDate = checkoutDateNew + (30 - checkinDateNew);
        window.open(
          "/billingPage/" +
            totalTravelDate +
            "/" +
            prpDespNoGuest.value +
            "/" +
            checkinDateNew +
            "/" +
            checkoutDateNew +
            "/" +
            (checkinMonth + 1) +
            "/" +
            (checkoutMonth + 1)
        );
      }
    } else {
      alert("Checkout date must be greater than checkin date!");
    }
  } else {
    alert("Please Enter Checkin & Checkout Date and guest!");
  }
});
