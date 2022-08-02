import Mail from "../lib/Mail";

export default { 
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: "Queue Test <queue@queue.com.br>",
      to: `${user.name}, <${user.email}>`,
      subject: "User register",
      html: `Hi, ${user.name}, welcome to the queue test system`
    });
  }
}