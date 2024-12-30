import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "user@gmail.com" && password === "12345") {
    const token = jwt.sign({ email }, "your-secret-key", {
      expiresIn: "1h",
    });

    return new Response(
      JSON.stringify({ user: "SeekyBot", email: "user@gmail.com", token }),
      {
        status: 200,
        headers: {
          "Set-Cookie": `jwt=${token}; Path=/; HttpOnly; Max-Age=${
            12 * 60 * 60
          }; SameSite=Strict`,
        },
      }
    );
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });
  }
}
