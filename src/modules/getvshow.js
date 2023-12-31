/* eslint-disable import/no-cycle */
const getvShow = async (showurl) => {
  if (showurl === undefined) {
    const response = await fetch('https://api.tvmaze.com/shows');
    return response.json();
  }

  const response = await fetch(showurl);
  return response.json();
};

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PfSTe5fXEenmmx01ykkD/likes';
const addLikes = async (id) => {
  await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
};
const getlikes = (async () => {
  const response = await fetch(url, { method: 'GET' });
  return response.json();
});

const addComments = async (itemId, username, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PfSTe5fXEenmmx01ykkD/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
};

const getComments = async (id) => {
  let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PfSTe5fXEenmmx01ykkD/comments?item_id=${id}`);
  if (response.status === 400) {
    response = [];
    return response;
  }
  return response.json();
};

export {
  getvShow, addLikes, getlikes, addComments, getComments,
};
