fetch("resources/faq.json")
  .then((response) => response.json())
  .then((data) => {
    const reviewsContainer = document.getElementById("faqAccordion");
    data.forEach((faq) => {
      const div = document.createElement("div");
      div.className = "accordion";
      div.innerHTML = `
          <div class="accordion-item">
        <p class="SCE_accordion-header" id="headingOne">
          <button class="SCE_accordion-button collapsed SCE_faq" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${faq.number}">
            ${faq.question}
          </button>
        </p>
        <div id="collapse${faq.number}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            <p class="SCE_faq-answer">${faq.answer}</p>
          </div>
        </div>
      </div>
      `;
      reviewsContainer.appendChild(div);
    });
  });
