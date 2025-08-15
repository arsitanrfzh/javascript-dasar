use pegawai;

-- COMMIT - tidak bisa di rollback ( data akan tetap ada
start transaction;
insert into hobi (id, nama_hobi)
values (5, 'Berenang');
commit;
rollback;

-- Tanpa COMMIT
start transaction;
insert into hobi (id, nama_hobi)
values (6, 'Travelling');

-- Mengulang statement sebelumnya (membtaalkan perubahan apapun yg telah dilakukan
rollback;

select * from hobi;