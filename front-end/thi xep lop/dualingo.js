
function myfunct() {
    var x = document.getElementById("right");
    var y = document.getElementById("right2")
    if (x.checked || y.checked ) {
        alert('chinh xac');
    } else {
        alert('sai')
    }
}
var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  

  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "finish";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  
  
}

function nextPrev(n) {  
  var x = document.getElementsByClassName("tab"); 
  if (n < 1 ) return false;  
  x[currentTab].style.display = "none"; 
  currentTab = currentTab + n; 
  if (currentTab >= x.length) {    
    document.getElementById("lesson").finish();
    return false;
  }
  showTab(currentTab);
}

 //get profile
async function getProfile() {x
  const response = await fetch(url + "user/profile/" + sessionStorage.getItem("username"), {
    method: "GET",
    withCredentials: true,
    headers: {
      token: sessionStorage.getItem('token'),
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data["data"];
}
