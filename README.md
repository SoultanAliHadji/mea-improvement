# mea_frontend

viewtable query:
CREATE VIEW viewtable AS
SELECT
realtime_deviations.id,
realtime_deviations.realtime_images_id,
realtime_deviations.user_id,
realtime_deviations.type_validation,
realtime_deviations.type_object,
realtime_deviations.violate_count,
realtime_deviations.comment,
realtime_deviations.created_at,
realtime_deviations.updated_at,
realtime_images.image,
realtime_images.cctv_id,
cctv.name,
cctv.location,
cctv.ip
FROM cctv RIGHT JOIN realtime_images ON cctv.id = realtime_images.cctv_id
RIGHT JOIN realtime_deviations ON realtime_images.id = realtime_deviations.realtime_images_id