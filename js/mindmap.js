function showMindmap(id){
  document.querySelectorAll('.mindmap')
    .forEach(m => m.classList.remove('active'));

  document.getElementById(id).classList.add('active');
}

