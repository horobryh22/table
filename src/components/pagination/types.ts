export type PaginationType = {
    totalPages: number;
    currentPage: number;
    setPage: (value: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    contentPerPage: string;
    setContentPerPage: (value: string) => void;
}