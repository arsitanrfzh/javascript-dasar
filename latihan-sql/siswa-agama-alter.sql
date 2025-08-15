use sekolah;

alter table siswa
add column kode_agama int,
add constraint kode_agama_siswa_kode
foreign key(kode_agama)
references agama(kode);