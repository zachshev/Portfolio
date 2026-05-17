export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Contact Form Submission:", body);

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
