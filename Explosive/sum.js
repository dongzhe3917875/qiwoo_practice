function sum(n) {
  if (n < 1) {
    return 0
  } else if (n == 1) {
    return 1
  }

  function update(n, m) {
    if (n == 1 || m == 1) {
      return 1
    }
    if (n == m) {
      return 1 + update(n, n - 1);
    }
    if (n < m) {
      return update(n, n);
    }
    if (n > m) {
      return update(n - m, m) + update(n, m - 1)
    }
  }
  return update(n, n);
}
