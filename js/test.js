fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
          // Menampilkan data pada halaman
          const todoContainer = document.getElementById('todo-container');
          
                // Buat elemen HTML untuk menampilkan data
          const todoElement = document.createElement('div');
          todoElement.innerHTML = `
              <p><strong>Todo ID:</strong> ${json.id}</p>
              <p><strong>Title:</strong> ${json.title}</p>
              <p><strong>Completed:</strong> ${json.completed}</p>
              <p><strong>User ID:</strong> ${json.userId}</p>
                `;
                
          // Menambahkan elemen ke dalam container
          todoContainer.appendChild(todoElement);
                
                // Fetch data user berdasarkan userId
          fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`)
              .then(response => response.json())
              .then(user => {
                  // Menampilkan informasi pengguna
                  const userElement = document.createElement('div');
                  userElement.innerHTML = `
                      <h3>User Details</h3>
                      <p><strong>Name:</strong> ${user.name}</p>
                      <p><strong>Email:</strong> ${user.email}</p>
                      <p><strong>Phone:</strong> ${user.phone}</p>
                      <p><strong>Website:</strong> ${user.website}</p>
                  `;
                  todoContainer.appendChild(userElement);
              });
      })
            .catch(error => {
            console.error('Error fetching data:', error);
      });

              // Event listener untuk form submission
              const contactForm = document.getElementById('contact-form');
              contactForm.addEventListener('submit', function(event) {
                  event.preventDefault(); // Mencegah form untuk submit secara default
                  
                  const name = document.getElementById('name').value;
                  const email = document.getElementById('email').value;
                  const message = document.getElementById('message').value;
                  
                  // Log form data ke console (atau Anda bisa mengirimkannya ke server)
                  console.log('Name:', name);
                  console.log('Email:', email);
                  console.log('Message:', message);
                  
                  // Menampilkan alert setelah form dikirim
                  alert('Form Submitted!\n' +
                        'Name: ' + name + '\n' +
                        'Email: ' + email + '\n' +
                        'Message: ' + message);
                  
                  // Kosongkan form setelah submit
                  contactForm.reset();
              });