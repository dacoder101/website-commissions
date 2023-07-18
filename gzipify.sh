# set -x
for a in `find public/`; do
rm $a.gz
gzip -9 -k $a &>/dev/null
done
set +x