export const api = {
  get(endpoint) {
    // const opts = {
    //   headers: {
    //     "Authorization": "Bearer" + sessionStorage.getItem("token")
    //   }
    // };

    return fetch(`http://127.0.0.1:5000/api/${endpoint}`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  },

  get_one(endpoint, id) {
    return fetch(`http://127.0.0.1:5000/api/${endpoint}/${id}`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  },

  signIn(endpoint, data) {
    console.log(data);
    return fetch(`http://127.0.0.1:5000/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else alert("Bad username or password");
      })
      .then((data) => {
        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("user", data.role);
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("_id", data.id);
      })
      .catch((error) => {
        console.error(error);
        alert("Server Non-Responsive");
      });
  },

  post(endpoint, data) {
    console.log(data);
    return fetch(`http://127.0.0.1:5000/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else alert("There has been some error");
      })
      .catch((error) => console.error(error));
  },

  filter(endpoint, type) {
    return fetch(`http://127.0.0.1:5000/api/${endpoint}?type=${type}`)
      .then((response) => response.json())
      .catch((error) => console.error(error));

    // console.log(data);
    // return fetch(`http://localhost:5000/api/${endpoint}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then(response => response.json())
    //   .catch(error => console.error(error))
  },

  put(endpoint, data, id) {
    return fetch(`http://127.0.0.1:5000/api/${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  },

  delete(endpoint, id) {
    return fetch(`http://127.0.0.1:5000/api/${endpoint}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  },
};
