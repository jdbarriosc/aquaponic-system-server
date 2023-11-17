function corsOriginHandler(ctx) {
  const origin = ctx.get('Origin');

  if (
    process.env.NODE_ENV !== 'production' ||
    (origin && origin.endsWith('aquaponics.com'))
  ) {
    return origin;
  }

  return 'https://aquaponics.com';
}

export default corsOriginHandler;
