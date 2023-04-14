const word = document.getElementById('word');
const blobs = [];

for (let i = 1; i <= 3; i++) {
  const blob = document.createElement('div');
  blob.classList.add('blob', `blob${i}`);
  blobs.push(blob);
  word.appendChild(blob);
}

word.addEventListener('mousemove', function(e) {
  const x = e.pageX - this.offsetLeft;
  const y = e.pageY - this.offsetTop;

  blobs.forEach(blob => {
    blob.style.transform = `translate(${x}px, ${y}px)`;
    blob.style.opacity = 1;
  });

  this.style.fontSize = '30px';
});

word.addEventListener('mouseleave', function() {
  blobs.forEach(blob => {
    blob.style.opacity = 0;
  });

  this.style.fontSize = '24px';
});