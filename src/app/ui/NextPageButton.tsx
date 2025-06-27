'use client';

import Button from '@/app/ui/Button';
import { useState } from 'react';

export function NextPageButton() {
  const [page, setPage] = useState(0);

  return <Button>Ver mais</Button>;
}
