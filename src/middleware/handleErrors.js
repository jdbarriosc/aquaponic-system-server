async function handleErrors(ctx, next) {
  try {
    await next();
  } catch (error) {
    throw error;
  }
}

export default handleErrors;
