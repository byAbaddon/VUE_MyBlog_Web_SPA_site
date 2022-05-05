<template>
  <section id="register">
    <div class="color">
        <div class="register-form">
            <h1>Register</h1>
            <form action="#/register" method="POST" id="form">
                <label for="email">Email</label>
                <input type="text" name="email">
                <label for="password">Password</label>
                <input type="password" name="password">
                <label for="repeat-password">Repeat Password</label>
                <input type="password" name="repeatPassword">
                <button>Submit</button>
                <a href="#/login" class="option">Already have an account?</a>
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
#register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('@/assets/images//laptop.jpg');
  background-size: cover;
  background-position: 100%;
}

.register-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 60px 30px;
  background: #fff;
  margin-top: 80px;
  transition: transform 0.5s;
  border-radius: 5px;
}

.register-form label {
  margin: 10px 0;
}

.register-form h1 {
  margin-bottom: 30px;
  font-size: 40px;
  padding: 10px 50px;
}

#register form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#register input[type="text"],
#register input[type="password"] {
  font-size: 18px;
  padding: 11px 20px;
  outline: none;
  border: none;
  background: rgb(230, 230, 230);
  border-radius: 5px;
  width: 300px;
}

#register button {
  font-size: 18px;
  padding: 12px 10px;
  border: none;
  background: #212121;
  color: #fff;
  margin-top: 30px;
}

#register button:hover {
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