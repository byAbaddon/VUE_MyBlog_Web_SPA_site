<template>
  <section id="login">
    <div class="color">
        <div class="login-form">
            <h1>Login</h1>
            <form action="#/login" method="POST" id="form">
                <label for="email">Email</label>
                <input type="text" name="email">
                <label for="password">Password</label>
                <input type="password" name="password">
                <button>Submit</button>
                <a href="#/register" class="option">Don't have an account?</a>
            </form>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('@/assets/images/login.jpg');
  background-size: cover;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px 30px;
  background: #fff;
  margin-top: 80px;
  border-radius: 5px;
}

.login-form label {
  margin: 10px 0;
}

.login-form h1 {
  margin-bottom: 30px;
  font-size: 40px;
  padding: 10px 50px;
}

#login form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#login input[type="text"],
#login input[type="password"] {
  font-size: 18px;
  padding: 11px 20px;
  outline: none;
  border: none;
  background: rgb(230, 230, 230);
  border-radius: 5px;
}

#login button {
  font-size: 18px;
  padding: 12px 10px;
  border: none;
  background: #212121;
  color: #fff;
  margin-top: 30px;
}

#login button:hover {
  cursor: pointer;
}

.option {
  align-self: center;
  margin-top: 30px;
  text-decoration: none;
  color: #636e72;
}

.color {
  height: 100%;
  width: 100%;
  background: #2121218a;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>