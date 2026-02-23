//aniimacao scroll
const Observacao = new IntersectionObserver((entrada) => {
  entrada.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('show')
    } else {
      entrada.target.classList.remove('show')
    }
  })
})
const elementos = document.querySelectorAll('.hiden')

elementos.forEach((elementos) => Observacao.observe(elementos))


// dima
let selectedDiamonds = 78;

function selectDiamonds(value) {
  selectedDiamonds = value;
  document.querySelectorAll('.card-recargas button').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

//enviar mensagem no zapp   
function sendToWhatsApp() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá STE Shop! Quero fazer uma recarga de ${selectedDiamonds} diamantes. Aqui está o meu ID:${playerId} aguarde enquanto faço o pagamento`;

  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');


}

//assinaturas
function assinatura1() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá STE Shop! Quero comprar a Assinatura Mensal. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function assinatura2() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá STE Shop! Quero comprar a Assinatura Mensal. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function assinatura3() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá STE Shop! Quero comprar a Assinatura Semanal Económica. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva1() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá STE Shop! Quero comprar a Trilha da Evolutiva de 3 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva2() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá STE Shop! Quero comprar a Trilha da Evolutiva de 7 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function evolutiva3() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }
  const message = `Olá STE Shop! Quero comprar a Trilha da Evolutiva de 30 dias. Aqui está o meu ID:${playerId}. Aguarde enquanto faço o pagamento.`;
  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function passeb() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }


  const message = `Olá STE Shop! Quero comprar o Passe Booyha. Aqui está o meu ID:${playerId}  aguarde enquanto faço o pagamento`;
  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function passeDeNivel() {
  const playerId = document.getElementById('playerId').value.trim();
  if (!playerId) {
    alert('Insira o seu ID');
    return;
  }


  const message = `Olá STE Shop! Quero comprar o Passe de Nível. Aqui está o meu ID:${playerId}  aguarde enquanto faço o pagamento`;
  const url = `https://wa.me/+244958615117?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}



//alerta personizado
function alertaPersonalizado(mensagem) {
  const alerta = document.getElementById('alerta');
  document.getElementById('mensagemAlerta').innerText = mensagem;
  alerta.style.display = 'block';
}

function fecharAlerta() {
  document.getElementById('alerta').style.display = 'none';
}



/*funcao slider */
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;
let interval;

function createDots() {
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll('.dots span').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function goToSlide(i) {
  index = i;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
  resetAutoSlide();
}

function nextSlide() {
  index = (index + 1) % slides.length;
  goToSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  goToSlide(index);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

createDots();
goToSlide(0);
startAutoSlide();

//funcao de comentario
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("comentario").value;

  const texto = `Feedback recebido:%0A%0ANome: ${nome}%0AMensagem: ${mensagem}`;
  const telefone = "+244924142392"; // seu número com DDI

  window.open(`https://wa.me/${telefone}?text=${texto}`, "_blank");
});

