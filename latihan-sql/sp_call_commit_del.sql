use sekolah;
-- melakukan commit sehingga tidak dapat dirollback
call sp_del_siswa('101');
commit;