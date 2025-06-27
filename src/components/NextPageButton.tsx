'use client';

import Button from '@/components/Button';
import { useState } from 'react';

export function NextPageButton() {
  const [page, setPage] = useState(0);

  return <Button>Ver mais</Button>;
}
