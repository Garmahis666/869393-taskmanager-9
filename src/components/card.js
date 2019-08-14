const createCardDeadline = (deadLine) => {
  const options = {day: `numeric`, month: `long`};
  return `<div class="card__dates">
  <div class="card__date-deadline">
    <p class="card__input-deadline-wrap">
      <span class="card__date">${deadLine.toLocaleDateString(`en-US`, options)}</span>
      <span class="card__time">${deadLine.toLocaleTimeString(`en-US`)}</span>
    </p>
  </div>
</div>`;
};

const createCardTag = (tagName) => `<span class="card__hashtag-inner">
  <span class="card__hashtag-name">
    ${tagName}
  </span>
</span>`;

const createCardHashTags = (cardTags) => {
  let cardTag = ``;
  cardTags.forEach((tagName) => {
    cardTag += createCardTag(tagName);
  });
  return `<div class="card__hashtag">
   <div class="card__hashtag-list">
     ${cardTag}
   </div>
</div>`;
};

export const getCardMarkup = (cardText, cardColor = `black`, cardRepeat = false, cardDeadLineDate = null, cardTags = []) => {
  const classColor = `card--${cardColor}`;
  let cardDates = cardDeadLineDate ? createCardDeadline(cardDeadLineDate) : ``;
  let classDeadline = (cardDeadLineDate && (cardDeadLineDate < Date.now())) ? ` card--deadline` : ``;
  let cardHashTags = (cardTags.length > 0) ? createCardHashTags(cardTags) : ``;
  return `<article class="card ${classColor}${cardRepeat ? ` card--repeat` : ``}${classDeadline}">
  <div class="card__form">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn card__btn--archive">
          archive
        </button>
        <button
          type="button"
          class="card__btn card__btn--favorites card__btn--disabled"
        >
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <p class="card__text">${cardText}</p>
      </div>

      <div class="card__settings">
        <div class="card__details">
          ${cardDates}

          ${cardHashTags}
        </div>
      </div>
    </div>
  </div>
</article>
`;
};
