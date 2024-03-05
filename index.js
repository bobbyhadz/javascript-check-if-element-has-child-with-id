console.log('bobbyhadz.com');

const box = document.getElementById('box');

if (box.querySelector('#child-3') !== null) {
  // 👇️ this runs
  console.log('✅ element has child with id of child-3');
} else {
  console.log('⛔️ element does NOT have child with id');
}
