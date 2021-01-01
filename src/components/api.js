export { addNewCard, deleteCard, likeCard, deleteLikeCard, editAvatar }

const config = {
  baseUrl: 'https://nomoreparties.co/v1/frontend-st-cohort-201',
  headers: {
    authorization: 'f15896d0-72f5-483c-814a-20bcbd0d96a2',
    'Content-Type': 'application/json'
  }
}

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export function getUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(getResponseData)
}

export function editProfileInfo(userName, userJob,) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${userName}`,
      about: `${userJob}`
    })
  })
    .then(getResponseData)
}

export function getCards() {
  return fetch(`${config.baseUrl}/cards`, { headers: config.headers })
    .then(getResponseData);
};

function addNewCard(cardName, cardLink) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(cardData),
    }).then(getResponseData);
};

function deleteCard(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    }).then(getResponseData);
};

function likeCard(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers,
    }).then(getResponseData);
};

function deleteLikeCard(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    }).then(getResponseData);
};

function editAvatar(avatarLink) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ avatar: avatarUrl }),
  }).then(getResponseData);
};
